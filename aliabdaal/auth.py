from lib2to3.pgen2 import token
from socket import gaierror
from flask import Blueprint, redirect, render_template, request, url_for,abort
from aliabdaal import send_email
from flask_mail import Mail,Message
from itsdangerous import BadTimeSignature, URLSafeTimedSerializer,SignatureExpired

from aliabdaal.models import User

auth = Blueprint('auth',__name__)

s = URLSafeTimedSerializer('priyanshumaurya')

@auth.route('/',methods=['GET','POST'])
def sign_up_sun_snipp():
    if request.method == 'POST':
        email = request.form.get('email')
        name = request.form.get('firstName')
        token = s.dumps(email,salt="email-confirm")
        html = render_template('index.html',token=token)
        
        try:
            send_email(html = html,
            receiver_email=email,
            subject="Important: confirm your subscription"
            )
        except gaierror:
            
            abort(404)

    if name is None:
        name = 'NULL'
        
    return redirect(url_for('auth.newsletter_thanks',email=email,name=name))

@auth.route('/thank-you/<token>')
def thank_you(token) -> 'html':
    try:
        email = s.loads(token,salt="email-confirm",max_age=360)
        
        from aliabdaal import db
        
        User.query.filter_by(email=email).update({User.confirm : 1})
        db.session.commit()

    except (SignatureExpired,BadTimeSignature):
        return render_template('thank_you.html',title='thank-you',link_expired=True)
    return render_template('thank_you.html',title='thank-you',link_expired=False)


@auth.route('/newsletter-thanks/<email>/<name>')
def newsletter_thanks(name=None,email=None) -> 'html':
    
    
    from .models import User
    from aliabdaal import db

    user = User(first_name=name,email=email) if name is not None else User(email=email)
    
    db.session.add(user)
    db.session.commit()
    return render_template('newsletter_thanks.html',title='newsletter-thanks')
