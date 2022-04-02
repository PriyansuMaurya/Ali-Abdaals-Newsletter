from flask import Blueprint,render_template, request

views = Blueprint('views',__name__)


@views.route('/')
def entry_page() -> 'html':
    return render_template('entry.html',title='Ali Abdaal')


@views.route('/about')
def about() -> 'html':
    return render_template('about.html',title='about')

@views.route('/articles')
def articles() -> 'html':
    return render_template('articles.html',title='articles')

@views.route('/productivity')
def productivity() -> 'html':
    return render_template('productivity.html',title='productivity')

@views.route('/studying')
def studying() -> 'html':
    return render_template('studying.html',title='studying')

@views.route('/youtubing')
def youtubing() -> 'html':
    return render_template('youtubing.html',title='youtubing')


@views.route('/enterpreneurship')
def enterpreneurship() -> 'html':
    return render_template('enterpreneurship.html',title='enterpreneurship')

@views.route('/money')
def money() -> 'html':
    return render_template('money.html',title='money')

@views.route('/writing')
def writing() -> 'html':
    return render_template('writing.html',title='writing')

@views.route('/tech')
def tech() -> 'html':
    return render_template('tech.html',title='tech')

@views.route('/journal')
def journal() -> 'html':
    return render_template('journal.html',title='journal')


@views.route('/courses')
def courses() -> 'html':
    return render_template('courses.html',title='courses')

@views.route('/podcast')
def podcast() -> 'html':
    return render_template('podcast.html',title='podcast')

@views.route('/book-notes')
def book_notes() -> 'html':
    return render_template('book_notes.html',title='Book Notes')

@views.route('/newsletter')
def newsletter() -> 'html':
    return render_template('newsletter.html',title='newsletter')



@views.route('/newsletter-thanks/<email>')
def newsletter_thanks(email=None) -> 'html':
    from .models import User
    from aliabdaal import db
    user = User(email=email)
    db.session.add(user)
    db.session.commit()
    return render_template('newsletter_thanks.html',title='newsletter-thanks')
